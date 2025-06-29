# Session Authentication Debug Guide

## 🔍 **Step-by-Step Debugging Process**

### 1. **Test Session After Login**

After you login from the frontend, test the session using these endpoints:

#### **Test Session Endpoint:**
```
GET https://your-backend-url.com/test-session
```

#### **Debug Auth Endpoint:**
```
GET https://your-backend-url.com/debug/auth
```

### 2. **Check Browser Console**

1. Open browser developer tools (F12)
2. Go to Network tab
3. Try to enable 2FA
4. Look for the request to `/mfa/setup2fa`
5. Check if cookies are being sent

### 3. **Check Cookie Storage**

1. Open browser developer tools (F12)
2. Go to Application tab (Chrome) or Storage tab (Firefox)
3. Look for Cookies under your backend domain
4. Check if `sessionId` cookie exists

### 4. **Test with Postman/Insomnia**

1. First, login using POST to `/auth/login`
2. Copy the `sessionId` cookie from the response
3. Make a GET request to `/test-session` with the cookie
4. Check if authentication works

## 🚨 **Common Issues & Solutions**

### **Issue 1: No Session Cookie**
**Symptoms:** No `sessionId` cookie in browser
**Solution:** Check session configuration in backend

### **Issue 2: Cookie Not Being Sent**
**Symptoms:** Cookie exists but not sent with requests
**Solution:** Ensure `withCredentials: true` in axios

### **Issue 3: Session Expired**
**Symptoms:** Cookie exists but authentication fails
**Solution:** Check session timeout settings

### **Issue 4: CORS Cookie Issues**
**Symptoms:** Cookie not set due to CORS
**Solution:** Ensure proper CORS configuration

## 🔧 **Quick Fixes to Try**

### **Fix 1: Update Session Configuration**
```javascript
const sessionoption = {
  secret: process.env.SECRET, 
  resave: true, // Changed to true
  saveUninitialized: true, // Changed to true
  store: store,
  cookie: {
    httpOnly: true,
    secure: false, // Set to false for testing
    sameSite: 'lax', // Set to lax for testing
    expires: Date.now() + 1000*60*60*7*24,
    maxAge: 1000*60*60*7*24
  },
  name: 'sessionId'
};
```

### **Fix 2: Test with Simple Session**
```javascript
// Add this test endpoint
app.get("/simple-test", (req, res) => {
  req.session.test = "working";
  res.json({
    sessionID: req.sessionID,
    test: req.session.test,
    user: req.user
  });
});
```

## 📋 **Debugging Checklist**

- [ ] Login works from frontend
- [ ] Session cookie is set in browser
- [ ] Cookie is sent with subsequent requests
- [ ] `/test-session` returns authenticated user
- [ ] `/debug/auth` shows proper session data
- [ ] MFA setup request includes session cookie

## 🆘 **If Still Not Working**

1. **Check MongoDB Connection:**
   ```javascript
   // Add to backend
   mongoose.connection.on('connected', () => {
     console.log('MongoDB connected successfully');
   });
   ```

2. **Check Session Store:**
   ```javascript
   // Add to backend
   store.on('connect', () => {
     console.log('Session store connected');
   });
   ```

3. **Test with Local Session:**
   ```javascript
   // Temporarily disable MongoDB session store
   const sessionoption = {
     secret: process.env.SECRET,
     resave: false,
     saveUninitialized: false
   };
   ```

## 📞 **Next Steps**

1. Deploy the updated backend with debugging
2. Test the endpoints mentioned above
3. Check browser console and network tab
4. Report back with the results from `/test-session` and `/debug/auth` 