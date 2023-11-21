interface FsItem {
	name: string;
	resolved: string;
}

type FsDir = FsItem;
type FsFile = { size: number; sizeStr: string } & FsItem;
