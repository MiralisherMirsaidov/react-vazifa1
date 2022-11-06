import './App.css';

function App() {
  return (
    <div className='main'>
      <div className='container-fluid'>
        <h1 className="creative"><span>C</span>reative</h1>
        <h3 className='sign'>New User? <span>Sign Up</span></h3>
      </div>
      <div className='global'>
        <img className="rasm" src="./img/rasm.png" alt="" />
        <div className='local'>
          <div>
            <h1 className='welcome'>Welcome Back!</h1>
            <h1 className='login'>Login to continue</h1>
            <div className='inputlar'>
              <input className='username' type="text" placeholder='username@gmail.com' /> <br />
              <input type="text" placeholder='Enter Password' />
            </div>
            <div className='knopka'>
              <button className='btn'>Login</button>
              <p>FORGET PASSWORD?</p>
            </div>
            <div className='ikonka'>
              <p className='ikontext'>Login with</p>
              <img src="./img/goog.png" className='ikonrasm' alt="" />
              <img src="./img/face.png" className='ikonrasm' alt="" />
              <img src="./img/twit.png" className='ikonrasm' alt="" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
