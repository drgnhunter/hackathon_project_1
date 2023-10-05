<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Login</title>
    <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            clifford: '#da373d',
          }
        }
      }
    }
  </script>
</head>
<body>
    <div id="userLogin">
        <div class=" flex flex-col">
            <label for="login_data_1">Email/Mobile</label>
            <input data-key="login_data_1" id="login_data_1"/>
            
        </div>
        <div class=" flex flex-col w-20">
            <label for="login_data_password">Password</label>
            <input data-key="login_data_password" id="login_data_password"/>
            <div class=" w-20 h-20 bg-black">
                <i  class="bi bi-eye w-20 text-lime-400"></i>
            </div>
        </div>
        <div class=" flex flex-col">
            <label for="rp">Remember Password</label>
            <input data-checkBox="checkbox" id="rp" type="checkbox" />
        </div>
        <div class=" flex flex-col">
            <a id="fp">Forgot Password?</a>
        </div>
        <button id="userLoginBtn">Log in</button>
    </div>

    <script src="userLogin.js"></script>
</body>
</html>