//
//  SafariWebExtensionHandler.swift
//  Shared (Extension)
//
//  Created by Bharath Kurumaddali on 7/31/24.
//

import SafariServices
import os.log

class SafariWebExtensionHandler: SFSafariExtensionHandler {

    override func toolbarItemClicked(in window: SFSafariWindow) {
          // This function is required but not needed for our task
      }

     func validateToolbarItem(in window: SFSafariWindow, validationHandler: @escaping (Bool, String?) -> Void) {
           validationHandler(true, nil)
       }

       // Handle the command from the extension's Info.plist
       override func messageReceived(withName messageName: String, from page: SFSafariPage, userInfo: [String : Any]? = nil) {
           if messageName == "copyURL" {
               page.getPropertiesWithCompletionHandler { properties in
                   if let url = properties?.url {
                       let pasteboard = NSPasteboard.general
                       pasteboard.clearContents()
                       pasteboard.setString(url.absoluteString, forType: .string)
                   }
               }
           }
       }

}
