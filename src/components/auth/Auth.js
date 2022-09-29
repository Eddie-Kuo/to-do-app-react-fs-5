import './Auth.css';

export default function Auth() {
  return (
    <div className='auth'>
      <div className="tabs">
        <h3>Sign In</h3>
        {/* these need to be nav links  */}
        <h3>Sign Out</h3>
      </div>
      <div className='form'>
        <div className='form-controls'>
          <label>
            Email:
          </label>
          <input type="email"></input>
        </div>
        <div className='form-controls'>
          <label>
            Password:
          </label>
          <input type="password"></input>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}
