---
description: >-
  When you obfuscate your script with AuthGuard, the library is added  
  automatically. There is also a second option — using the library directly —  
  but it’s not protected.
---

# v1

```lua
local AuthGuard = loadstring(game:HttpGet("https://raw.githubusercontent.com/AuthGuard0/library/refs/heads/main/v1.lua"))(
	"PRIVATE_KEY",
	{
		serviceId = "SERVICE_ID",
	}
)
local link = AuthGuard:getLink()
local success = AuthGuard:validateKey("key")
```

Or use obfuscate in AuthGuard

```lua
AuthGuard:getLink() --> string -- Get Link for Get Key
```

```lua
AuthGuard:validateKey(key: string) --> boolean
```

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

<figure><img src="../../.gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>
