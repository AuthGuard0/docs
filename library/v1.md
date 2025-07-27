# 🔐 AuthGuard v1 – Custom Library

### Setup

```lua
getgenv().settings = {
    Script_Title = "Script Name", -- Title shown in the UI
    KeyExpiration = 24            -- Key expiration time in hours
}

local AuthGuard = loadstring(game:HttpGet("https://raw.githubusercontent.com/AuthGuard0/library/refs/heads/main/v1_ui.lua"))(
	"PRIVATE_KEY",
	{
		serviceId = "SERVICE_ID",
	}
)
-- Place your script below this line and obfuscate the entire file for protection
```

---

### 🔗 Get Key Link

```lua
AuthGuard:getLink() --> string
```

Returns the URL users must visit to get a key.

---

### ✅ Validate Key

```lua
AuthGuard:validateKey(key: string) --> boolean
```

Checks if the key is valid.

---

### 🧪 Example Usage

```lua
local key = "YOUR_KEY_HERE"

print("Get your key at:", AuthGuard:getLink())

if not AuthGuard:validateKey(key) then
    warn("Invalid Key")
    return
end

-- Your actual code starts here
print("Key valid. Running script...")
```

---

<figure><img src="../.gitbook/assets/Знімок екрана 2025-07-17 о 00.07.06.png" alt=""><figcaption></figcaption></figure>
