export interface DataType {
  chapterNo: number;
  chapterName: string;
  chapterNameTranslate: {
    [countryCode: string]: string;
  };
  lastVerseNo: number;
  verses: {
    [key: number]: {
      helper: string;
      full: string;
    };
  };
}
