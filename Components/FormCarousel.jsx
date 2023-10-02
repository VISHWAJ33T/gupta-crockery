const FormCarousel = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3 mx-3"
    >
      {/* *********************************************1********************************************* */}
      <label className="text-center justify-center text-xl flex flex-col items-center gap-3">
        <span className="w-[100px] text-gray-700">
          {post[0].deviceType.toUpperCase()}
        </span>
        <textarea
          value={post[0].imgs.join(", ")}
          onChange={(e) => {
            const newImgs = e.target.value.split(", ");
            setPost([{ ...post[0], imgs: newImgs }, ...post.slice(1)]);
          }}
          // rows={10}
          rows={post[0].imgs.join(", ").length / 25}
          required
          placeholder='Enter links seperated by ", "(comma + 1 space) (for eg: link1, link2, link3...)'
          className="min-w-[200px] sm:w-[400px] px-3"
        ></textarea>
      </label>
      {/* *********************************************2********************************************* */}
      <label className="text-center justify-center text-xl flex flex-col items-center gap-3">
        <span className="w-[100px] text-gray-700">
          {post[1].deviceType.toUpperCase()}
        </span>
        <textarea
          value={post[1].imgs.join(", ")}
          onChange={(e) => {
            const newImgs = e.target.value.split(", ");
            const updatedPost = [...post];
            updatedPost[1] = { ...updatedPost[1], imgs: newImgs };
            setPost(updatedPost);
          }}
          rows={post[1].imgs.join(", ").length / 25}
          required
          placeholder='Enter links seperated by ", "(comma + 1 space) (for eg: link1, link2, link3...)'
          className="min-w-[200px] sm:w-[400px] px-3"
        ></textarea>
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="bg-[#131b2e] text-white border whitespace-nowrap cursor-pointer font-bold py-2 px-10 my-3 rounded-full"
      >
        {submitting ? `${type}...` : type}
      </button>
      <div className="sm:w-[50%] mx-3">
        <h3 className="text-center font-bold text-2xl">Preview</h3>
        <div>
          <h3 className="text-center text-md">Mobile</h3>
          {post[0].imgs.map((img) => (
            <div key={img}>
              <a
                href={img}
                target="_blank"
                className="flex flex-wrap gap-3 p-3 overflow-hidden w-[100%] text-blue-500 border"
              >
                <img src={img} width="fit-content" />
                <p className="break-all">{img}</p>
              </a>
              <br />
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-center text-md">Desktop</h3>
          {post[1].imgs.map((img) => (
            <div key={img}>
              <a
                href={img}
                target="_blank"
                className="flex flex-wrap gap-3 p-3 overflow-hidden w-[100%] text-blue-500 border"
              >
                <img src={img} />
                <p className="break-all">{img}</p>
              </a>
              <br />
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default FormCarousel;
