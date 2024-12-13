import React, { useState } from 'react';

    const App: React.FC = () => {
      const [isSidebarOpen, setIsSidebarOpen] = useState(true);

      const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };

      return (
        <div className="flex min-h-screen bg-gray-100">
          <aside
            className={`bg-gray-800 text-white w-64 p-4 transition-transform duration-300 ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
            <ul>
              <li className="py-2">Item 1</li>
              <li className="py-2">Item 2</li>
              <li className="py-2">Item 3</li>
            </ul>
            <button
              className="mt-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? 'Hide' : 'Show'} Sidebar
            </button>
          </aside>
          <div className="flex-1 flex flex-col">
            <header className="bg-white shadow p-4 flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-gray-600">Home</span>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-600">Dashboard</span>
              </div>
              <div className="flex-grow"></div>
              <div className="text-right">
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={toggleSidebar}
                >
                  {isSidebarOpen ? 'Hide' : 'Show'} Sidebar
                </button>
              </div>
            </header>
            <main className="flex-1 p-4">
              <h1 className="text-2xl font-bold">Main Content</h1>
              <p>This is the main content area.</p>
            </main>
          </div>
        </div>
      );
    };

    export default App;
