
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function VerifyOTP() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleVerify = () => {
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP.');
      return;
    }


    if (otp === '123456') {
      router.push('/dashboard');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Verify Your Phone</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter the 6-digit code sent to your phone.
        </p>

        <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-4 text-center text-lg tracking-widest"
        />

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <button
          onClick={handleVerify}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition duration-200"
        >
          Verify
        </button>
      </div>
    </div>
  );
}
