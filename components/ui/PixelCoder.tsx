export function PixelCoder() {
  return (
    <div className="relative w-72 h-96 hidden lg:flex items-center justify-center">
      {/* CRT Monitor Container */}
      <div className="relative w-full h-full">
        
        {/* Monitor Bezel - Heavy 8-bit style */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-8 border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
          style={{
            boxShadow: "0 0 60px rgba(255,157,102,0.3), inset 0 0 20px rgba(0,0,0,0.8), inset -8px -8px 0 rgba(0,0,0,0.5), inset 8px 8px 0 rgba(255,255,255,0.1)"
          }}>
          
          {/* Top bezel detail */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-gray-700 to-gray-800 border-b border-gray-600 flex items-center justify-center">
            <div className="text-[10px] font-bold tracking-widest text-gray-500">CRT MONITOR</div>
          </div>

          {/* Screen area */}
          <div className="absolute top-8 left-4 right-4 bottom-12 bg-black rounded overflow-hidden border-2 border-gray-900"
            style={{
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(255,157,102,0.2)"
            }}>
            
            {/* CRT Scanlines - horizontal lines */}
            <div className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255,157,102,0.1) 25%, rgba(255,157,102,0.1) 26%, transparent 27%, transparent 74%, rgba(255,157,102,0.1) 75%, rgba(255,157,102,0.1) 76%, transparent 77%, transparent)",
                backgroundSize: "100% 4px"
              }} />
            
            {/* Screen glow */}
            <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-transparent to-transparent opacity-60" />

            {/* Terminal content */}
            <div className="relative z-10 p-6 font-mono text-sm leading-relaxed h-full overflow-hidden">
              {/* Cursor prompt */}
              <div className="text-orange-400 mb-3">
                <span className="text-green-400">$</span> <span className="text-gray-300">build</span>
              </div>

              {/* Output lines with animation */}
              <div className="space-y-2">
                <div className="animate-code-line text-green-400">
                  <span className="text-orange-400">&gt;</span> Compiling...
                </div>
                
                <div className="animate-code-line animation-delay-100 text-green-400">
                  <span className="text-cyan-400">✓</span> const build = () =&gt; {"{"}
                </div>
                
                <div className="animate-code-line animation-delay-200 text-green-400">
                  <span className="text-cyan-400">✓</span> &nbsp;&nbsp;return &lt;App /&gt;
                </div>
                
                <div className="animate-code-line animation-delay-300 text-green-400">
                  <span className="text-cyan-400">✓</span> {"}"}
                </div>

                <div className="mt-4 animate-code-line animation-delay-300 text-yellow-400">
                  <span className="text-orange-400">⚡</span> Executing...
                </div>

                <div className="animate-code-line animation-delay-300 text-lime-400">
                  <span className="text-green-400">✔</span> Success
                </div>

                {/* Blinking cursor */}
                <div className="mt-3 text-green-400">
                  <span className="text-gray-300">$ </span>
                  <span className="w-2 h-5 bg-green-400 inline-block animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bezel controls */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-800 to-gray-900 border-t border-gray-600 flex items-center justify-center gap-8 px-4">
            {/* Power light */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50" />
              <div className="text-[9px] text-gray-500">POWER</div>
            </div>

            {/* Brightness knob */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full border border-gray-600 flex items-center justify-center">
                <div className="w-1 h-2 bg-gray-400" />
              </div>
              <div className="text-[9px] text-gray-500">BRIGHT</div>
            </div>

            {/* Volume knob */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full border border-gray-600 flex items-center justify-center">
                <div className="w-1 h-2 bg-gray-400" />
              </div>
              <div className="text-[9px] text-gray-500">VOLUME</div>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse" />
              <div className="text-[9px] text-gray-500">EXEC</div>
            </div>
          </div>
        </div>

        {/* Monitor stand */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-8 bg-gradient-to-b from-gray-700 to-gray-900 border-4 border-gray-800 rounded-b-lg shadow-xl" />

        {/* Monitor base */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-56 h-4 bg-gradient-to-b from-gray-600 to-gray-800 border-4 border-gray-900 rounded-b-lg shadow-2xl" />

        {/* Screen glow effect */}
        <div className="absolute -inset-12 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent rounded-3xl blur-3xl opacity-40 -z-10 animate-pulse" />
      </div>
    </div>
  );
}
