
const FormCarousel = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-3 mx-3"
        >
            {/* *********************************************1********************************************* */}
            {/* **************************************************imgs************************************************** */}
            <label className="text-center justify-center text-xl flex gap-3">
                <span className="w-[100px] text-gray-700">{post[0].deviceType.toUpperCase()}</span>
                <textarea
                    value={post[0].imgs.join(", ")}
                    onChange={(e) => {
                        const newImgs = e.target.value.split(", ");
                        setPost([{ ...post[0], imgs: newImgs }, ...post.slice(1)]);
                    }}
                    placeholder='Enter links seperated by ", "(comma + 1 space) (for eg: link1, link2, link3...)'
                    className="min-w-[200px] sm:w-[400px] px-3"
                ></textarea>
            </label>
            {/* *********************************************2********************************************* */}
            <label className="text-center justify-center text-xl flex gap-3">
                <span className="w-[100px] text-gray-700">{post[1].deviceType.toUpperCase()}</span>
                <textarea
                    value={post[1].imgs.join(", ")}
                    onChange={(e) => {
                        const newImgs = e.target.value.split(", ");
                        const updatedPost = [...post];
                        updatedPost[1] = { ...updatedPost[1], imgs: newImgs };
                        setPost(updatedPost);
                    }}
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
        </form>
    );
};

export default FormCarousel;
