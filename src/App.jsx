import { useState } from 'react'
import { Eye,EyeOff,Landmark  } from 'lucide-react';
import './App.css'

export default function App() {

  function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }
  
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());

   return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        
          
          <div class=" flex gap-3">
            <div class=""><Landmark /></div>
            <div>
              <h1 className="font-bold text-lg">GCE Sirangam</h1>
          
            <p className="text-sm text-gray-500">Placement Cell</p>
              </div>
          </div>
          
        

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Login Portal
        </button>
      </header>

      {/* Main */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md text-center">

          <h2 className="text-2xl font-bold">Admin Portal Login</h2>
          <p className="text-gray-500 mb-6">
            Secure access for placement administrators
          </p>

          {/* Card */}
          <div className="bg-white p-6 rounded-lg shadow">

            {/* Username */}
            <div className="text-left mb-4">
              <label className="text-sm font-medium">
                Username
              </label>
              
              <input
                type="text"
                placeholder="Enter username"
                className="w-full mt-1 px-3 py-2 border rounded"
              />
            </div>

            {/* Password */}
            <div className="text-left mb-4">
              <div className="flex justify-between text-sm">
                <label>Password</label>
                <span className="text-blue-600 cursor-pointer text-xs">
                  Forgot?
                </span>
              </div>
            <div class="relative">
            
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full mt-1 px-3 py-2 border rounded"
              />

              <button type="button"
              onClick={() => setShowPassword(prev => !prev)}
              class="absolute inset-y-0 right-0 items-center px-3 text-gray-600">
                {showPassword ? <EyeOff /> : <Eye />}

              </button>
            </div> 

              
            </div>

            {/* CAPTCHA */}
            <div className="text-left mb-4">
              <label className="text-sm">Verification</label>

              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 bg-gray-200 py-2 text-center rounded font-bold">
                  {captcha}
                </div>
                <button  onClick={() => setCaptcha(generateCaptcha())}
                 className="bg-gray-200 px-3 py-2 rounded">
                  🔄
                </button>
              </div>

              <input
                type="text"
                placeholder="Enter CAPTCHA"
                className="w-full mt-2 px-3 py-2 border rounded"
              />
            </div>

            {/* Button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              LOGIN TO ADMIN PANEL →
            </button>

          </div>

          {/* Footer */}
          <p className="text-xs text-gray-500 mt-6">
            © 2024 GCE Srirangam
          </p>
        </div>
      </div>
    </div>
  );
}

