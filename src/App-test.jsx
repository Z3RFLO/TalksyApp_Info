function App() {
  return (
  <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        <span className="bg-gradient-to-r from-talksy-purple to-talksy-lilac bg-clip-text text-transparent inline-block whitespace-nowrap">
          Talksy
        </span>
      </h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Test Component</h2>
          <p className="text-talksy-lilac/80 mb-6">
            This is a test to verify that Tailwind CSS is working properly.
          </p>
          
          <div className="flex gap-4">
            <button className="gradient-button px-6 py-3 rounded-full text-talksy-dark font-semibold">
              Primary Button
            </button>
            <button className="ghost-button px-6 py-3 rounded-full text-white font-semibold">
              Secondary Button
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-talksy-purple to-talksy-lilac rounded-xl flex items-center justify-center mb-4">
              <span className="text-talksy-dark font-bold">T</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Feature 1</h3>
            <p className="text-talksy-lilac/70">Test feature description</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-talksy-blue to-talksy-slate rounded-xl flex items-center justify-center mb-4">
              <span className="text-white font-bold">A</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Feature 2</h3>
            <p className="text-talksy-lilac/70">Test feature description</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-talksy-purple to-talksy-blue rounded-xl flex items-center justify-center mb-4">
              <span className="text-white font-bold">L</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Feature 3</h3>
            <p className="text-talksy-lilac/70">Test feature description</p>
          </div>
        </div>
      </div>
      
      {/* Background blobs */}
      <div className="fixed -left-32 -top-20 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-talksy-purple to-talksy-lilac opacity-40 filter blur-3xl animate-blob-drift -z-10" />
      <div className="fixed right-[-10%] top-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-talksy-blue to-talksy-slate opacity-30 filter blur-2xl animate-blob-drift-delayed -z-10" />
    </div>
  );
}

export default App;
