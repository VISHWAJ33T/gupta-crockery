
const FormCategoryImgs = ({ type, post, setPost, submitting, handleSubmit }) => {
    // console.log(post)
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-3 mx-3"
        >
            {/* **************************************************Top Left************************************************** */}
            <label className="text-center justify-center text-xl flex gap-3">
                <span className="w-[100px] text-gray-700">Top Left Image</span>
                <input
                    value={post.imgtl}
                    onChange={(e) => setPost({ ...post, imgtl: e.target.value })}
                    type="text"
                    placeholder="Top Left Image"
                    required
                    className="min-w-[200px] sm:w-[400px] px-3"
                ></input>
            </label>

            <label className="text-center justify-center text-xl flex gap-3">
                <span className="w-[100px] text-gray-700">Top Left Name</span>
                <input
                    value={post.nametl}
                    onChange={(e) => setPost({ ...post, nametl: e.target.value })}
                    type="text"
                    placeholder="Top Left Name"
                    required
                    className="min-w-[200px] sm:w-[400px] px-3"
                ></input>
            </label>
            {/* **************************************************Top Right************************************************** */}
            <label className="text-center justify-center text-xl flex gap-3">
                <span className="w-[100px] text-gray-700">Top Right Image</span>
                <input
                    value={post.imgtr}
                    onChange={(e) => setPost({ ...post, imgtr: e.target.value })}
                    type="text"
                    placeholder="Top Right Image"
                    required
                    className="min-w-[200px] sm:w-[400px] px-3"
                ></input>
            </label>

            <label className="text-center justify-center text-xl flex gap-3">
                <span className="w-[100px] text-gray-700">Top Right Name</span>
                <input
                    value={post.nametr}
                    onChange={(e) => setPost({ ...post, nametr: e.target.value })}
                    type="text"
                    placeholder="Top Right Name"
                    required
                    className="min-w-[200px] sm:w-[400px] px-3"
                ></input>
            </label>
            {/* **************************************************Bottom Left************************************************** */}
            <label className="text-center justify-center text-xl flex gap-3">
                <span className="w-[100px] text-gray-700">Bottom Left Image</span>
                <input
                    value={post.imgbl}
                    onChange={(e) => setPost({ ...post, imgbl: e.target.value })}
                    type="text"
                    placeholder="Bottom Left Image"
                    required
                    className="min-w-[200px] sm:w-[400px] px-3"
                ></input>
            </label>

            <label className="text-center justify-center text-xl flex gap-3">
                <span className="w-[100px] text-gray-700">Bottom Left Name</span>
                <input
                    value={post.namebl}
                    onChange={(e) => setPost({ ...post, namebl: e.target.value })}
                    type="text"
                    placeholder="Bottom Left Name"
                    required
                    className="min-w-[200px] sm:w-[400px] px-3"
                ></input>
            </label>
            {/* **************************************************Bottom Right************************************************** */}
            <label className="text-center justify-center text-xl flex gap-3">
                <span className="w-[100px] text-gray-700">Bottom Right Image</span>
                <input
                    value={post.imgbr}
                    onChange={(e) => setPost({ ...post, imgbr: e.target.value })}
                    type="text"
                    placeholder="Bottom Right Image"
                    required
                    className="min-w-[200px] sm:w-[400px] px-3"
                ></input>
            </label>

            <label className="text-center justify-center text-xl flex gap-3">
                <span className="w-[100px] text-gray-700">Bottom Right Name</span>
                <input
                    value={post.namebr}
                    onChange={(e) => setPost({ ...post, namebr: e.target.value })}
                    type="text"
                    placeholder="Bottom Right Name"
                    required
                    className="min-w-[200px] sm:w-[400px] px-3"
                ></input>
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

export default FormCategoryImgs;
