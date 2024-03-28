function EditName() {
  //put pour changer le username au clique du button
  //state pour changer selon le user rentrer
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default EditName;
