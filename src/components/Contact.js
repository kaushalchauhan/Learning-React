const Contact = () => {
  return (
    <div>
      <h2 className="text-2xl p-3 m-3 font-bold">Contact Us Page</h2>
      <input
        className="border border-black  p-2 m-2"
        type="text"
        placeholder="name"
      />
      <input
        className="border border-black  p-2 m-2"
        type="text"
        placeholder="message"
      />
      <button className="border bg-green-300 border-black rounded-md  p-2 m-2">
        Submit
      </button>
    </div>
  );
};
export default Contact;
