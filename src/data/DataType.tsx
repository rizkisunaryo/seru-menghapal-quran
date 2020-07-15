export interface DataType {
  chapterNo: number;
  chapterName: string;
  lastVerseNo: number;
  verses: {
    [key: number]: {
      helper: string;
      full: string;
    };
  };
}
