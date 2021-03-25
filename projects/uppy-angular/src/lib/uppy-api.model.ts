export interface UppyApi {
  getFile(fileId: string): UppyFile;
  upload(): Promise<any>;
  reset(): void;
}

export interface UppyFile {
  id: string,
  name: string,
  extension: string,
  type: string,
  data: any,
  size: number,
  preview: any
}
