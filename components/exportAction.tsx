import React from 'react';
import { Button, Share } from 'react-native';
import RNFS from 'react-native-fs';
import XLSX from 'xlsx';
import { utils, write } from 'xlsx';
type ExcelProps = {
    data: any;
    headers: any;
    filename: any;
  };
const ExportButton = (props:ExcelProps) => {
    const { data, headers, filename } = props;
  const handleClick = async () => {
    const worksheet = utils.json_to_sheet(data, { header: headers });
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const file = write(workbook, { bookType: 'xlsx', type: 'binary' });
 
    
    const path = RNFS.DocumentDirectoryPath + '/' + filename + '.xlsx';
    await RNFS.writeFile(path, file, 'binary');
    
    const options = {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      url: path
    };
    
    const { action } = await Share.share(options);
    if (action === Share.sharedAction) {
      console.log('File shared successfully.');
    } else if (action === Share.dismissedAction) {
      console.log('Share action dismissed.');
    }
  };
  
  return (
    <Button title="Export" onPress={handleClick} />
  );
};

export default ExportButton;
