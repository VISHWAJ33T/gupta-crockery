"use client";
import { useEffect, useState } from "react";
import CarouselSwiper from "./CarouselSwiper";

const CarouselContainer = () => {
  const [allImgs, setAllImgs] = useState([]);

  const fetchImgs = async () => {
    const response = await fetch(`/api/landingPage/carousel`);
    // const response = await fetch(`/api/landingPage/carousel`, { cache: 'force-cache' });
    const data = await response.json();
    setAllImgs(data);
  };
  useEffect(() => {
    fetchImgs();
  }, []);
  return <>
    <div className="sm:hidden">
      <CarouselSwiper allImgs={allImgs} type={0} width={720} height={400} tempSrc="https://res-console.cloudinary.com/dywvrv8nw/thumbnails/v1/image/upload/v1694266648/Qmx1ci1QTkctRmlsZV9ndjZzOWo=/template_primary/L2NfdGh1bWIsd183MjAsaF80MDAsZ19hdXRv" blurURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICA0IBwgHBwcIBw0HBwcHBw8ICQcNFREWFhURExMYHSggGBoxGxMTITEhMSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDisZFRkrNy0tNystLSs3LSsrKysrLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAAAQIDBAf/xAAYEAEBAQEBAAAAAAAAAAAAAAAAARECEv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgQD/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwDxoA3S8iMGKRmMELDMAWDDPAIYrBgJw8Vh4CMPFYeAjBi8GAzwsaYVgMxi7E4CSUVgJJRAkGQpEZACMgAAAABRsYNAjBgMGGeIEeHh4CcPDw8ELBisORRMh4qQ5ATh4vDwEeRjTBgMsKxribAZWJsbWIsBlYWNLE2AjE2LsIEYSqmgRHSFIAAQMgAAB0AwAMHEBDBgDBgShDioJDkORUApFSCKkEKQ5FSHIJU4MXh4FZYVjWxNgtZWJsa2JsBjYmxrYmwVjYmxpYmwGdTVpoJpHSAiMCkAAAAB0GAgZkcAzhGBgHACoUVFQ4qJi4IcipBFRUEisEipCIWDF4PKiMTY0xNiDOxFjWxFRWViK1rPoVnUVpUUVnU1dTQRSqqmgRGQoAAAAA6DEERTOFDEOGRgDBxUOGRwRUXExcVFRchcxpzFQ5Fzk+eWk5EZ+R5beSvIMLEWN+oy6grKo6adM6gz6RV1FRrGdRWlRRWdTV1AJqaqpoERkKAAAAAOkyNkCiNQwABw4RxUNUSqDKuWnKIvlUactuIy5bcKNeY15iOG3IheSsaYXQrn6jHuOjth2DDpn006ZdAjpnV9IqKmoqqio0moqqmgmpqqmikQAAgAAAB1GRsqZpNUM4RgZwjioaolUVlcXyzi4I15b8Vz81rzVHVxWvNc3HTXnpBvqeqj0V6Au6w7q++mPdUZ9Mul9Vn0COmdX0ioqazq+kVGk1FVUUCqadTRQQoAEZAAADrMhGVOHCNUMAKhmRwFHEmJq4qVnKqVUa81pzWEq5VR0c9Nee3LKudA6fZXth6F6QX10y6ovSLVC6rPqqtRagmoqqijWJ6RVVFRU1FVUUCpGQpAAUgYAgZA6wWmyGCNUOGQVDNJgoEYh6cqTVFyqlZyqlBrKqdMpTlEa+h6Z6NBVqbStTaB2ptGp0UVFVaio0moq6igmoqqmikRkKQMAAAgCMA6ARiGCMDNJgYI1QwQBRpPRD1UqDUi5T1GjRGmlqNGgvU6WlosPRanS1FO0rRpUCqKdTQTUnSFIjIUGRoAAACMgbggIZkAMaRiGaTlUM0mBgjA9GkWgvRqNGiL0tTpaC9LU6Wiq0anRoK0rU6NAVNO1NFKkKVFIAgMAANACABBRuABkHABQAEQQwFDMAAAAAAAEAICAFIAAQAACkACaYFSVAFIgAAAAAAAAAf/2Q==" />
    </div>
    <div className="hidden sm:block min-h-full">
      <CarouselSwiper allImgs={allImgs} type={1} width={1440} height={345} tempSrc="https://res-console.cloudinary.com/dywvrv8nw/thumbnails/v1/image/upload/v1694266648/Qmx1ci1QTkctRmlsZV9ndjZzOWo=/template_primary/L2NfdGh1bWIsd18xNDQwLGhfMzQ1LGdfYXV0bw==" blurURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICA0IBwgHBwcIBw0HBwcHBw8ICQcNFREWFhURExMYHSggGBoxGxMTITEhMSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDisZFRkrNy0tNystLSs3LSsrKysrLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAAAQIDBAf/xAAYEAEBAQEBAAAAAAAAAAAAAAAAARECEv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgQD/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwDxoA3S8iMGKRmMELDMAWDDPAIYrBgJw8Vh4CMPFYeAjBi8GAzwsaYVgMxi7E4CSUVgJJRAkGQpEZACMgAAAABRsYNAjBgMGGeIEeHh4CcPDw8ELBisORRMh4qQ5ATh4vDwEeRjTBgMsKxribAZWJsbWIsBlYWNLE2AjE2LsIEYSqmgRHSFIAAQMgAAB0AwAMHEBDBgDBgShDioJDkORUApFSCKkEKQ5FSHIJU4MXh4FZYVjWxNgtZWJsa2JsBjYmxrYmwVjYmxpYmwGdTVpoJpHSAiMCkAAAAB0GAgZkcAzhGBgHACoUVFQ4qJi4IcipBFRUEisEipCIWDF4PKiMTY0xNiDOxFjWxFRWViK1rPoVnUVpUUVnU1dTQRSqqmgRGQoAAAAA6DEERTOFDEOGRgDBxUOGRwRUXExcVFRchcxpzFQ5Fzk+eWk5EZ+R5beSvIMLEWN+oy6grKo6adM6gz6RV1FRrGdRWlRRWdTV1AJqaqpoERkKAAAAAOkyNkCiNQwABw4RxUNUSqDKuWnKIvlUactuIy5bcKNeY15iOG3IheSsaYXQrn6jHuOjth2DDpn006ZdAjpnV9IqKmoqqio0moqqmgmpqqmikQAAgAAAB1GRsqZpNUM4RgZwjioaolUVlcXyzi4I15b8Vz81rzVHVxWvNc3HTXnpBvqeqj0V6Au6w7q++mPdUZ9Mul9Vn0COmdX0ioqazq+kVGk1FVUUCqadTRQQoAEZAAADrMhGVOHCNUMAKhmRwFHEmJq4qVnKqVUa81pzWEq5VR0c9Nee3LKudA6fZXth6F6QX10y6ovSLVC6rPqqtRagmoqqijWJ6RVVFRU1FVUUCpGQpAAUgYAgZA6wWmyGCNUOGQVDNJgoEYh6cqTVFyqlZyqlBrKqdMpTlEa+h6Z6NBVqbStTaB2ptGp0UVFVaio0moq6igmoqqmikRkKQMAAAgCMA6ARiGCMDNJgYI1QwQBRpPRD1UqDUi5T1GjRGmlqNGgvU6WlosPRanS1FO0rRpUCqKdTQTUnSFIjIUGRoAAACMgbggIZkAMaRiGaTlUM0mBgjA9GkWgvRqNGiL0tTpaC9LU6Wiq0anRoK0rU6NAVNO1NFKkKVFIAgMAANACABBRuABkHABQAEQQwFDMAAAAAAAEAICAFIAAQAACkACaYFSVAFIgAAAAAAAAAf/2Q==" />
    </div>
  </>;
};

export default CarouselContainer;
