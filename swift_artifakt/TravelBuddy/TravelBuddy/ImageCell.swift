//
//  ImageCell.swift
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-02.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//

import UIKit

class ImageCell: UITableViewCell {

    @IBOutlet weak var listImageView: UIImageView!
    @IBOutlet weak var imageTitleLabel: UILabel!
    
    func setImage(image: Image) {
        listImageView.image = image.image
        imageTitleLabel.text = image.title
    }
}
