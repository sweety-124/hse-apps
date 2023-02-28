import React from 'react';
import { Button } from 'react-native';
import RNFS from 'react-native-fs';
import XLSX from 'xlsx';

const ExportButton = ({ data, headers, filename }) => {
  const handleClick = async () => {
    const worksheet = XLSX.utils.json_to_sheet(data, { header: headers });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const file = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
    
    const path = RNFS.DocumentDirectoryPath + '/' + filename + '.xlsx';
    await RNFS.writeFile(path, file, 'binary');
    
    const options = {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      url: path
    };
    
    const { action } = await Share.open(options);
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
