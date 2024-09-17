import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  console.log("Received request:", req.method); 

  const client = await clientPromise;
  const db = client.db("UAE");
  const collection = db.collection("projects");

  try {
    switch (req.method) {
      case "GET":
        const projects = await collection.find({}).toArray();
        console.log(projects);
        res.status(200).json(projects);
        break;
      case "POST":
        const newProject = req.body;
        await collection.insertOne(newProject);
        res.status(201).json(newProject);
        break;
      case "PUT":
        const updatedProject = req.body;
        await collection.updateOne(
          { _id: updatedProject._id },
          { $set: updatedProject }
        );
        res.status(200).json(updatedProject);
        break;
      case "DELETE":
        const projectId = req.query.id;
        await collection.deleteOne({ _id: projectId });
        res.status(200).json({ message: "Project deleted" });
        break;
      default:
        res.status(405).end(); 
    }
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
