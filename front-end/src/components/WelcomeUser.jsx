function WelcomeUser({ info, switcher }) {
  return (
    <>
      <h1>
        Welcome back
        <br />
        {info.firstName} {info.lastName}!
      </h1>
      <button className="edit-button" onClick={switcher}>
        Edit Name
      </button>
    </>
  );
}

export default WelcomeUser;
