//
//  Appcelerator Titanium Mobile
//  WARNING: this is a generated file and should not be modified
//

#import <UIKit/UIKit.h>
#define _QUOTEME(x) #x
#define STRING(x) _QUOTEME(x)

NSString * const TI_APPLICATION_DEPLOYTYPE = @"development";
NSString * const TI_APPLICATION_ID = @"com.studios.walmartstorelocatorweek3";
NSString * const TI_APPLICATION_PUBLISHER = @"sequestermckinney";
NSString * const TI_APPLICATION_URL = @"http://www.3535studios.com";
NSString * const TI_APPLICATION_NAME = @"walmartstorelocatorweek3";
NSString * const TI_APPLICATION_VERSION = @"1.0";
NSString * const TI_APPLICATION_DESCRIPTION = @"";
NSString * const TI_APPLICATION_COPYRIGHT = @"2016 by sequestermckinney";
NSString * const TI_APPLICATION_GUID = @"179cfa0e-d220-4b5c-9222-48a02d72c920";
BOOL const TI_APPLICATION_ANALYTICS = true;
NSString * const TI_APPLICATION_BUILD_TYPE = @"";

#ifdef TARGET_IPHONE_SIMULATOR
NSString * const TI_APPLICATION_RESOURCE_DIR = @"";
#endif

int main(int argc, char *argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

#ifdef __LOG__ID__
	NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
	NSString *documentsDirectory = [paths objectAtIndex:0];
	NSString *logPath = [documentsDirectory stringByAppendingPathComponent:[NSString stringWithFormat:@"%s.log",STRING(__LOG__ID__)]];
	freopen([logPath cStringUsingEncoding:NSUTF8StringEncoding],"w+",stderr);
	fprintf(stderr,"[INFO] Application started\n");
#endif

	int retVal = UIApplicationMain(argc, argv, nil, @"TiApp");
    [pool release];
    return retVal;
}