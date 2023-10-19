export default function Input({ action }: any) {
  const onUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        action(reader.result);
        resolve();
      };
    });
  };

  return <input accept="image/*" multiple type="file" onChange={onUpload} />;
}
