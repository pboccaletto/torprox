document.getElementById("removeProxy").style.display = 'block';
document.getElementById("setProxy").style.display = 'block';

document.getElementById("setProxy").addEventListener("click", async () => {
    try {
          // Set the proxy to 127.0.0.1:9050
          await chrome.proxy.settings.set({
              value: {
                  mode: "fixed_servers",
                  rules: {
                      singleProxy: {
                          scheme: "socks5",
                          host: "127.0.0.1",
                          port: 9050
                      }
                  }
              },
              scope: "regular"
          });
          alert("Proxy set successfully!");
          //document.getElementById("removeProxy").style.display = 'block';
          //document.getElementById("setProxy").style.display = 'none';

        } catch (error) {
        console.error("Error setting proxy:", error);
    }
});

document.getElementById("removeProxy").addEventListener("click", async () => {
    try {
          await chrome.proxy.settings.clear({scope: "regular"});
          alert("Default proxy settings restored!");
          //document.getElementById("removeProxy").style.display = 'none';
          //document.getElementById("setProxy").style.display = 'block';

        } catch (error) {
        console.error("Error removing proxy:", error);
    }
});
