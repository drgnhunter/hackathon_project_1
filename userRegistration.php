<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
    <div id="userReg">
        <div>
            <label for="fname">First Name</label>
            <input data-key="fname" id="fname" />
        </div>
        <div>
            <label for="lname">Last Name</label>
            <input data-key="lname" id="lname" />
        </div>
        <div>
            <label for="mobile">Mobile</label>
            <input data-key="mobile" id="mobile" />
        </div>
        <div class="passwordDiv">
            <label for="password">Password</label>
            <input data-p="1" data-key="password" id="password" />
            <div class="toggle-password h-20 w-20 bg-black">
                <i class="bi bi-eye w-20 text-lime-400"></i>
            </div>
        </div>
        <div class="passwordDiv">
            <label for="r-password">Retype Password</label>
            <input data-p="2" data-key="r-password" id="r-password" />
            <div class="toggle-password h-20 w-20 bg-black">
                <i class="bi bi-eye w-20 text-lime-400"></i>
            </div>
        </div>
        <button id="userRegBtn">Register</button>
    </div>

    <script src="userRegister.js"></script>
</body>

</html>