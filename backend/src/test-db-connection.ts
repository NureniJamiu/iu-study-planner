import pool from './db';

async function testDBConnection() {
  try {
    await pool.query('SELECT 1');
    console.log('Database connection test successful');
  } catch (error) {
    console.error('Database connection test failed:', error);
  }
}

testDBConnection();
