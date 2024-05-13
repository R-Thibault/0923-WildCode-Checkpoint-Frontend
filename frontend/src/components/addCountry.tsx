export default function AddCountry() {
  return (
    <>
      <div className="form_container">
        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="">Emoji</label>
            <input type="text" placeholder="Emoji" />
          </div>
          <div>
            <label htmlFor="">Code</label>
            <input type="number" placeholder="Code" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
