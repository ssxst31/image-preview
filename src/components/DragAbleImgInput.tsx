import { useRecoilState } from "recoil";

import { dragAbleFileListState } from "store/image";
import Input from "components/UploadInputInput";

export default function DragAbleImgInput() {
  const [imgFile, setImgFile] = useRecoilState<any>(dragAbleFileListState);

  return (
    <Input
      action={(a: any) => {
        setImgFile([...imgFile, a]);
      }}
    />
  );
}
