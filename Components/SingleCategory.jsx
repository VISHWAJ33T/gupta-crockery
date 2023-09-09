"use client"
import Image from "next/image"; // Import next/image component
import Link from "next/link";
import { useEffect, useState } from "react";

const SingleCategory = ({ heading }) => {
  const [allData, setAllData] = useState([]);

  const fallbackImageUrl = "data:image/jpeg;base64,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";

  const isValidImageUrl = (url) => {
    return url && (url.startsWith("https://") || url.startsWith("data:image"));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(`/api/landingPage/categoryImgs/${heading}`, { cache: 'force-cache' });
    const data = await response.json();
    setAllData(data);
  };

  return (
    <div draggable="true" className={`min-w-[250px] items-start justify-center ${heading}-style py-4 pt-2 px-4 `}>
      <a href={`#${heading}`} className="category-heading text-2xl shadow-2xl text-[#ffffff] outline-8 pb-2 w-full block text-center font-bold cursor-pointer">
        {heading}
      </a>
      <div className={`grid grid-cols-2 gap-2`}>
        <Link
          href={{
            pathname: "/allitems",
            query: { category: "", search: allData.nametl },
          }}
          className="text-center flex items-center justify-center"
        >
          {isValidImageUrl(allData.imgtl) ? (
            <Image
              src={allData.imgtl}
              alt={allData.nametl}
              width={100}
              height={100}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,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"
              // className="bg-white w-[100px] h-[100px] object-fill"
              className="bg-white w-[100px] h-[100px] object-contain"
              style={{
                objectFit: "contain"
              }} />
          ) : (
            <img src={fallbackImageUrl} alt={allData.nametl} width={100} height={100}
              className="bg-white w-[100px] h-[100px] object-contain"
            // className="bg-white w-[100px] h-[100px] object-fill"
            />
          )}
        </Link>
        <Link
          href={{
            pathname: "/allitems",
            query: { category: "", search: allData.nametr },
          }}
          className="text-center flex items-center justify-center"
        >
          {isValidImageUrl(allData.imgtr) ? (
            <Image
              src={allData.imgtr}
              alt={allData.nametr}
              width={100}
              height={100}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,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"
              // className="bg-white w-[100px] h-[100px] object-fill"
              className="bg-white w-[100px] h-[100px] object-contain"
              style={{
                objectFit: "contain"
              }} />
          ) : (
            <img src={fallbackImageUrl} alt={allData.nametr} width={100} height={100}
              className="bg-white w-[100px] h-[100px] object-contain"
            // className="bg-white w-[100px] h-[100px] object-fill"
            />
          )}
        </Link>
        <Link
          href={{
            pathname: "/allitems",
            query: { category: "", search: allData.namebl },
          }}
          className="text-center flex items-center justify-center"
        >
          {isValidImageUrl(allData.imgbl) ? (
            <Image
              src={allData.imgbl}
              alt={allData.namebl}
              width={100}
              height={100}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NCA0HBw0IBwcHBw0HBwcHDQ8ICQcNFREWFhURExMYHSggGBoxGxMTITEhMSkrLi46Fx8zODMtNygtLjcBCgoKDQcNGgcNDisZHxkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAAAQIDBAUH/8QAHhABAAIDAQEBAQEAAAAAAAAAAAECAxESEwQUMSH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APcQAAIyAAgBkWxsDCOxsEtjaOy2Cewhs9gkEdjYJBHY2CQR2NgkEdjYJBHY2CWwhsbBMI7GwSNHZgZkAMEYAAAAAAIFICUdiZQmwJbLaubozkBb0XSicqE5Qaey7ZZzIzmBs7HbDOce4N3oPRg9x7g3+g9GD3HuDf6D0YPYewN/oPRh9h7A2+g9GL2P1Bs7HbH6pRlBsi5xdjjInGQGqLJRLLGRZW4NESkqrZOJBIAAYAAAACRtKSu8gheyi+Q8tmXJcE7ZVdsrPfIpvkBptmVWzMtsqq2UGyc6E52KcqM5AbpzF7MPoPQG72Hsxeg9AbvYezF6D0Bt9j9mL0HoDb7HGVh9DjIDf6nGVhjIlGQG6MiUZGKLpxcGyMicZGKLpxcG2uRdS7BW6/HcHQx2XRLLis01kFkGjBgYIAkAJBGVWSVsqMsgyZrMeW7Rnlhy2BXe6i9zyWZ72A7XU2ujeyq1gWTdHtVNkegXdn2o6PoF/Z9KIsfQL+h0p6HQLuh2p6LoF/Z9s/Q6Bpi6cXZYslFwa4unF2SLLIsDVF04uy1ssrYGqtmjFZhrZoxWB1MEtlGD55bsYLYMoMDBAEykyApZ8zRZlzg5/wBEsGWW36Jc7LIKMlme9luSWa8ghaVVrHaVcyAmS2jMlsE9nEq9nsFsSfSrZ7BZ0OlexsE+i6Q2WwWdDpXsbBdFkosoiUokGiLLK2Zq2WVkGitllbM9ZWVkGmtmnDP+sdJacMg6vzS6GP8AjnfM6GP+AuhJGDAwACZSYkEbMudqsyZwcz6XOyy6H0udlBlySzXloyM1wVWlXKdlcgjJbEkB7PaJglsbRMD2No7AHstlsgPY2iNgsiUolVCcAtrKysqYTqC+srayoqtqC+kteBjxtmAHU+V0cbn/ACuhjBdBlBgYABMAAjZkztdmXODlfS52V0fpc/KDHkZ7tOSGe8Az2VyutCuYBXKKcwWgRB6GgAPQ0BFKWi0CJHJCkY0NCHCUFEJRAJQsqhCysAnVbVXVbUF2NswMmOG354B1PmdDGwfNDfjBbBwUJQAAAJgAEbM2dplnzA5X0w5+WHS+iHPywDHkhnvDXeFF6gy2hVaGm1Vc1BnmC0umpcgq0NLOT5BXoaW8DgFOimF3BcApmC0u4LgFOj0t4PgFUQlELIolFAQiFlYOKLIoBVhbWBWq2tQTxw2/PDNjq3YKg3/PDdRkwQ2UgE4SgoSAAAEgABSz5o/xolVkgHL+irBlq6uejDloDn3qptVtvjVWxgxWohNGycaM4gYpoXDb4iMIMUY0oxtsYFlfnBz4xH5OlHzpfmBy/IvF1fzD8wOV4jwdaPmSj5gcjwHg7H5h+YHI8DjA635j/MDlRhTjC6X50o+cHPriWVxN0YE64AZceJsw41lMK/HjBZhq01hDHVbEAcGYAAADAAEhaEykGbLRkyYnQtCq1Acu+JXOF0rYkJxA53iPB0fI/IHO/OcfO6HklGMGGvzrK4GyMZxQGWMB+LXwOQZPE/Fq5HIMvkfk0cjkGfzHm0clyCjzHmv5HIKPM/NfyOQUxjSjGt5SioK4osrU4hOIAVhZCMQlAGZQYAAAAAAkpMgQmEZhZJaBXNUeFuhoFXJcrdDQK+Rys0NAhyfKehoEORys0NAr5HKzRaBDkuVmhoFfI5WaGgV8jlZoaBXyOVmhoEOT0lo9AjEJRB6ACIMADgAAAAAAAAgABAAAQAaGgAPQAAAADAADQ0QAxogA0NAANDQADQ0AA0YAAAAAABgAAAAf/9k="
              // className="bg-white w-[100px] h-[100px] object-fill"
              className="bg-white w-[100px] h-[100px] object-contain"
              style={{
                objectFit: "contain"
              }} />
          ) : (
            <img src={fallbackImageUrl} alt={allData.namebl} width={100} height={100}
              className="bg-white w-[100px] h-[100px] object-contain"
            // className="bg-white w-[100px] h-[100px] object-fill"
            />
          )}
        </Link>
        <Link
          href={{
            pathname: "/allitems",
            query: { category: "", search: allData.namebr },
          }}
          className="text-center flex items-center justify-center"
        >
          {isValidImageUrl(allData.imgbr) ? (
            <Image
              src={allData.imgbr}
              alt={allData.namebr}
              width={100}
              height={100}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,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"
              // className="bg-white w-[100px] h-[100px] object-fill"
              className="bg-white w-[100px] h-[100px] object-contain"
              style={{
                objectFit: "contain"
              }} />
          ) : (
            <img src={fallbackImageUrl} alt={allData.namebr} width={100} height={100}
              className="bg-white w-[100px] h-[100px] object-contain"
            // className="bg-white w-[100px] h-[100px] object-fill"
            />
          )}
        </Link>
      </div>
    </div>
  );
};

export default SingleCategory;