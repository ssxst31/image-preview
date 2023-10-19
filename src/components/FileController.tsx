import DragAbleImgInput from "components/DragAbleImgInput";
import FixedImgInput from "components/FixedImgInput";

export default function FileController() {
  return (
    <div className=" fixed bottom-0 bg-blue-400 bg-opacity-50 w-full max-w-[1080px] h-[300px] rounded-t-3xl p-10">
      <div className=" space-y-2">
        <div className=" text-white text-lg">
          백 그라운드 이미지 :
          <FixedImgInput />
        </div>
        {[1, 2, 3, 4, 5].map((el) => (
          <div className=" text-white text-lg">
            움직이는 이미지 :
            <DragAbleImgInput key={el} />
          </div>
        ))}
      </div>
    </div>
  );
}
