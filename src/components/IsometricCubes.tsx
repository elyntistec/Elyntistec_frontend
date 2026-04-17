const IsometricCubes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <path id="cube-top" d="M0,50 L86.6,0 L173.2,50 L86.6,100 Z" />
          <path id="cube-left" d="M0,50 L86.6,100 L86.6,200 L0,150 Z" />
          <path id="cube-right" d="M86.6,100 L173.2,50 L173.2,150 L86.6,200 Z" />
          
          <g id="cube-slate">
            <use href="#cube-top" fill="#6a6f85" />
            <use href="#cube-left" fill="#53586b" />
            <use href="#cube-right" fill="#3c4050" />
          </g>
          
          <g id="cube-navy">
            <use href="#cube-top" fill="#1b3052" />
            <use href="#cube-left" fill="#061731" />
            <use href="#cube-right" fill="#030d1d" />
          </g>
          
          <g id="cube-white">
            <use href="#cube-top" fill="#ffffff" />
            <use href="#cube-left" fill="#f0f0f0" />
            <use href="#cube-right" fill="#e0e0e0" />
          </g>
          
          <g id="cube-yellow">
            <use href="#cube-top" fill="#fef9c3" />
            <use href="#cube-left" fill="#fde047" />
            <use href="#cube-right" fill="#fbbf24" />
          </g>
        </defs>

        {/* Scaled coordinate system - Reduced to scale(0.6) for a more subtle watermark effect */}
        <g transform="translate(100, 100) scale(0.6)">
           
           {/* Background Stripes - Extreme low opacity */}
           <rect x="-1000" y="-1000" width="5000" height="5000" fill="#f8fafc" opacity="0.3" />
           <rect x="500" y="-1000" width="173.2" height="5000" fill="#061731" opacity="0.03" />

           {/* --- Top Left Cluster --- */}
           <use href="#cube-slate" x="0" y="0" opacity="0.2" />
           <use href="#cube-yellow" x="173.2" y="100" opacity="0.4" />
           <use href="#cube-navy" x="-86.6" y="150" opacity="0.1" />

           {/* --- Bottom Right Cluster --- */}
           <g transform="translate(1800, 1000)">
              <use href="#cube-white" x="0" y="0" opacity="0.5" />
              <use href="#cube-yellow" x="-173.2" y="100" opacity="0.3" />
              <use href="#cube-slate" x="86.6" y="150" opacity="0.2" />
           </g>

           {/* --- Random Floating Accents --- */}
           <use href="#cube-navy" x="1200" y="200" opacity="0.05" />
           <use href="#cube-yellow" x="400" y="800" opacity="0.1" />
           <use href="#cube-white" x="2200" y="400" opacity="0.3" />
           
        </g>
      </svg>
    </div>
  );
};

export default IsometricCubes;
