import React from 'react'

const Login = () => {
  return (
    <>
      <div className='imgcontainer'>
        <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20191003%2Fourmid%2Fpngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Flogin&tbnid=mBDH4g8QZzQ21M&vet=12ahUKEwjhkfKtv6D4AhUv_jgGHQrRAvcQMygAegUIARDMAQ..i&docid=7PkxTTyC_ZIdpM&w=360&h=360&q=login%20png%20images&ved=2ahUKEwjhkfKtv6D4AhUv_jgGHQrRAvcQMygAegUIARDMAQ' alt='Profile' />
      </div>

      <div className='container'>
        <label for='uname'>
          <b>Username</b>
        </label>
        <input type='text' placeholder='Enter Username' name='uname' required />

        <label for='psw'>
          <b>Password</b>
        </label>
        <input
          type='password'
          placeholder='Enter Password'
          name='psw'
          required
        />

        <button type='submit'>Login</button>
      </div>
    </>
  )
}

export default Login
