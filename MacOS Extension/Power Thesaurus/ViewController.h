//
//  ViewController.h
//  Power Thesaurus
//
//  Created by Jessie Berlin on 4/20/20.
//  Copyright © 2020 Jessie Berlin. All rights reserved.
//

#import <Cocoa/Cocoa.h>

@interface ViewController : NSViewController

@property (weak, nonatomic) IBOutlet NSTextField * appNameLabel;

- (IBAction)openSafariExtensionPreferences:(id)sender;

@end

