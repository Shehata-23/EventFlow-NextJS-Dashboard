const GradientSphere = () => {
    return (
      <div className="relative min-h-screen  sm:w-[1200px] w-full bg-black">
        <div className="absolute -top-50 -left-[0] w-96 h-96 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 rounded-full blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-80 left-[50%] w-64 h-64 bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 rounded-full blur-2xl opacity-60 animate-spin-slow"></div>
        <div className="absolute top-40 left-60 w-96 h-96 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full blur-3xl opacity-70 animate-pulse"></div>

      </div>
    );
  };
  
  export default GradientSphere;