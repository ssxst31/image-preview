import { useState } from "react";
import { useRecoilState } from "recoil";

import { dragAbleFileListState } from "store/image";
import Input from "components/UploadInputInput";

export default function DragAbleImgInput() {
  const [imgFile, setImgFile] = useRecoilState<any>(dragAbleFileListState);
  const [item2, setItem] = useState();

  return (
    <>
      <Input
        action={(a: any) => {
          setItem(a);
          setImgFile([...imgFile, { img: a }]);
        }}
      />
      넓이:
      <input
        className=" text-red-400"
        onChange={(e) => {
          const copyImgFile = imgFile.map((item: any) => {
            if (item.img === item2) {
              return { ...item, width: e.target.value };
            }
            return item;
          });
          setImgFile(copyImgFile);
        }}
      />
      높이:
      <input
        className=" text-red-400"
        onChange={(e) => {
          const copyImgFile = imgFile.map((item: any) => {
            if (item.img === item2) {
              return { ...item, height: e.target.value };
            }
            return item;
          });
          setImgFile(copyImgFile);
        }}
      />
    </>
  );
}
