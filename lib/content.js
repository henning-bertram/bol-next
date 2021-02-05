import fs from 'fs';
import path from 'path';

export async function getLinks() {
	const testdataDirectory = path.join(process.cwd(), 'testdata')
	const fullPath = path.join(testdataDirectory, `links.json`)
  
	
	const linksDataRaw =  fs.readFileSync(fullPath, 'utf8')
		return {
			linksDataRaw
		}
	}