//
//  Product.swift
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-04-04.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//

import Foundation

struct Product {
    private(set) public var imageName: String
    private(set) public var title: String
    
    init(title: String, imageName: String) {
        self.title = title
        self.imageName = imageName
    }
}
