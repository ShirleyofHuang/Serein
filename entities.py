import json

TECH = ['arduino', 'c++', 'version', 'qt', 'hardware', 'scratch', 'react', 'backend', 'eclipse', 'android', 'code', 'API', 'PowerShell', 'adobe', 'algo', 'blender', 'IDE', 'Python', 'programming', 'unit test', 'Java', 'Bachelor of Science', 'Computer Science', 'Node.js', 'Express.js', 'Web Developer', 'Vue.js', 'Linux', 'Stripe', 'Web Applications', 'Databases', 'Jenkins', 'HTML', 'Pug', 'CSS', 'SASS', 'JavaScript', 'ES6', 'Server', 'JWT', 'Docker', 'PHP', 'WordPress', 'Go', 'SSH', 'Git', 'S3', 'EC2', 'DNS', 'VPC', 'ECS', 'Nginx', 'MongoDB', 'SQL', 'Route53', 'REST', 'infrastructure', 'LEMP']
LEADERSHIP = ['mentor', 'mentorship', 'train', 'training', 'confidence', 'volunteer', 'supervision', 'initiative', 'goal', 'deadline', 'task', 'role', 'communication', 'time management', 'leader', 'assist', 'attitude', 'management', 'team', 'customer service', 'performance', 'club', 'community', 'society', 'guild', 'communities', 'representative', 'group', 'leader']
CREATIVITY = ['design', 'theme', 'architect', 'GUI', 'prototype', 'design', 'performance', 'UX design', 'intern']

if __name__ == '__main__':
    file_path = input("Enter path to file:\n")

    tech_total = 0.0
    lead_total = 0.0
    collab_total = 0.0
    create_total = 0.0

    with open(file_path, 'r') as f:
        json_dict = json.load(f)
        for entity in json_dict['entities']:
            for name in TECH:
                if name.lower() in entity['name'].lower():
                    tech_total += entity['salience']
            for name in LEADERSHIP:
                if name.lower() in entity['name'].lower():
                    lead_total += entity['salience']
            for name in CREATIVITY:
                if name.lower() in entity['name'].lower():
                    create_total += entity['salience']

    print(min([tech_total * 1.2, 1.0]),
          min([lead_total * 3, 1.0]),
          min([create_total * 10, 1.0]))


