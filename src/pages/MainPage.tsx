import { useRecoilValue } from "recoil";

import { backImgState, dragAbleFileListState } from "store/image";
import DragContainer from "components/DragContainer";

export default function MainPage() {
  const imgFile = useRecoilValue(backImgState);
  const dragAbleFileList = useRecoilValue(dragAbleFileListState);

  return (
    <div className="relative">
      {imgFile && (
        <img src={imgFile} className="user-drag-none absolute" alt="img" />
      )}
      {dragAbleFileList.map((file: any) => (
        <DragContainer>
          <img
            className="select-none user-drag-none absolute"
            src={file}
            alt="img"
          />
        </DragContainer>
      ))}
    </div>
  );
}
