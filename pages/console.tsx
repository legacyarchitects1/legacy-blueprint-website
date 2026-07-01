import React from 'react';

export default function Console() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white">
      <nav className="bg-black bg-opacity-50 border-b border-purple-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">🖥️ Owner's Console</h1>
          <p className="text-purple-300 mt-1">Mission Control for Legacy Blueprint OS</p>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Guest Management Card */}
          <div className="bg-gray-800 rounded-lg p-6 border border-purple-500 hover:border-purple-400 transition">
            <div className="text-4xl mb-3">👥</div>
            <h2 className="text-xl font-bold mb-2">Guest Management</h2>
            <p className="text-gray-300 mb-4">Add/remove guests, toggle access instantly</p>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-sm font-medium transition">
              Manage Guests
            </button>
          </div>

          {/* Communications Card */}
          <div className="bg-gray-800 rounded-lg p-6 border border-purple-500 hover:border-purple-400 transition">
            <div className="text-4xl mb-3">📞</div>
            <h2 className="text-xl font-bold mb-2">Communications</h2>
            <p className="text-gray-300 mb-4">View calls, SMS, and emails in real-time</p>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-sm font-medium transition">
              View Logs
            </button>
          </div>

          {/* System Health Card */}
          <div className="bg-gray-800 rounded-lg p-6 border border-purple-500 hover:border-purple-400 transition">
            <div className="text-4xl mb-3">⚙️</div>
            <h2 className="text-xl font-bold mb-2">System Health</h2>
            <p className="text-gray-300 mb-4">Monitor all knots and infrastructure</p>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-sm font-medium transition">
              View Status
            </button>
          </div>

          {/* Action Triggers Card */}
          <div className="bg-gray-800 rounded-lg p-6 border border-purple-500 hover:border-purple-400 transition">
            <div className="text-4xl mb-3">🚀</div>
            <h2 className="text-xl font-bold mb-2">Action Triggers</h2>
            <p className="text-gray-300 mb-4">Execute n8n workflows with one click</p>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-sm font-medium transition">
              Execute Workflow
            </button>
          </div>

          {/* Funding Knot Card */}
          <div className="bg-gray-800 rounded-lg p-6 border border-green-500 hover:border-green-400 transition">
            <div className="text-4xl mb-3">💰</div>
            <h2 className="text-xl font-bold mb-2">Funding Knot</h2>
            <p className="text-gray-300 mb-4">Capital sourcing & deal management</p>
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm font-medium transition">
              Open Funding
            </button>
          </div>

          {/* System Metrics Card */}
          <div className="bg-gray-800 rounded-lg p-6 border border-blue-500 hover:border-blue-400 transition">
            <div className="text-4xl mb-3">📊</div>
            <h2 className="text-xl font-bold mb-2">System Metrics</h2>
            <p className="text-gray-300 mb-4">Real-time performance analytics</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium transition">
              View Metrics
            </button>
          </div>
        </div>

        {/* Status Section */}
        <div className="mt-12 bg-gray-800 rounded-lg p-8 border border-purple-500">
          <h2 className="text-2xl font-bold mb-6">🌍 System Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 bg-gray-700 rounded">
              <span className="text-gray-300">Funding Knot</span>
              <span className="text-green-400 font-bold">✅ Healthy</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-700 rounded">
              <span className="text-gray-300">Marketing Agent</span>
              <span className="text-green-400 font-bold">✅ Healthy</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-700 rounded">
              <span className="text-gray-300">Debt Manager</span>
              <span className="text-green-400 font-bold">✅ Healthy</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-700 rounded">
              <span className="text-gray-300">Database</span>
              <span className="text-green-400 font-bold">✅ Connected</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
