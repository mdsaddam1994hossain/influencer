import React, { useState, useRef, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button'
import { FaUpload } from "react-icons/fa";
import { useTranslation } from 'react-i18next'

const CustomFileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const { t } = useTranslation()

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

   
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        className="hidden"
        accept="image/*" // Accept images only
      />
      {selectedFile ? (
        <img onClick={handleClick}  src={selectedFile} alt="Preview" className="w-full h-full object-cover rounded-md border cursor-pointer border-grayBorder " />
      ) : (
       
        <div onClick={handleClick} className="border cursor-pointer border-grayBorder p-8 rounded-md flex flex-col gap-4 w-full h-full items-center justify-center">
            <FaUpload />
            <Button className='bg-blackDark text-sm h-10' >{t("profileEdit.choose_picture")}</Button>
          </div>
       
      )}
    </div>
  );
};

export default CustomFileUpload;