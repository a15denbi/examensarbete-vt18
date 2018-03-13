//
//  Category.swift
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-13.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//

import Foundation

// Reusable struct for the model category
struct Category {
   // private(set) for safer data control
   private(set) public var title: String
   private(set) public var imageName: String
    
    init(title: String, imageName: String) {
        self.title = title
        self.imageName = imageName
    }
}
