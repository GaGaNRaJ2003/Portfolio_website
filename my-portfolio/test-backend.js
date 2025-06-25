// Test script to verify backend setup
const fetch = require('node-fetch');

const BACKEND_URL = 'http://localhost:3001';

async function testBackend() {
  console.log('🧪 Testing Portfolio Backend...\n');

  try {
    // Test 1: Health check
    console.log('1. Testing health check...');
    const healthResponse = await fetch(`${BACKEND_URL}/health`);
    const healthData = await healthResponse.json();
    
    if (healthResponse.ok) {
      console.log('✅ Health check passed:', healthData);
    } else {
      console.log('❌ Health check failed:', healthData);
      return;
    }

    // Test 2: Groq API endpoint (without API key - should fail gracefully)
    console.log('\n2. Testing Groq API endpoint...');
    const groqResponse = await fetch(`${BACKEND_URL}/api/groq/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          { role: 'user', content: 'Hello!' }
        ],
        model: 'llama3-70b-8192',
        temperature: 0
      })
    });

    const groqData = await groqResponse.json();
    
    if (groqResponse.status === 500 && groqData.error?.includes('API key')) {
      console.log('✅ Groq endpoint working (expected error without API key):', groqData.error);
    } else if (groqResponse.ok) {
      console.log('✅ Groq API working with API key!');
    } else {
      console.log('❌ Unexpected response:', groqData);
    }

    console.log('\n🎉 Backend tests completed!');
    console.log('\n📝 Next steps:');
    console.log('1. Add your Groq API key to backend/.env');
    console.log('2. Start the backend: cd backend && npm run dev');
    console.log('3. Start the frontend: npm run dev');
    console.log('4. Test the chat functionality in your browser');

  } catch (error) {
    console.log('❌ Test failed:', error.message);
    console.log('\n💡 Make sure the backend is running:');
    console.log('cd backend && npm run dev');
  }
}

// Run the test
testBackend(); 