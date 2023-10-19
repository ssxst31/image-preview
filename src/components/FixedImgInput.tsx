import { useSetRecoilState } from "recoil";

import { backImgState } from "store/image";
import Input from "components/UploadInputInput";

export default function FixedImgInput() {
  const setImgFile = useSetRecoilState(backImgState);

  return <Input action={setImgFile} />;
}
