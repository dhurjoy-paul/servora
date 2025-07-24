const saveUserInDb = async (user) => {
  try {
    const res = await fetch("http://localhost:3000/user", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    if (!res.ok) {
      throw new Error(`Failed to save user: ${res.statusText}`)
    }

    const data = await res.json()
    console.log('User data saved to DB -->', data)
    return data
  } catch (err) {
    console.error('❌ Error saving user:', err.message)
    throw err
  }
}
export default saveUserInDb;