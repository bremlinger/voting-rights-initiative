import csv
import json
import operator


'''
Spreadsheet headers:
Litigation Title
Citation
Other Citations (Cases) That Might be Relevant
Court
Circuit
Year
State
Covered
Case Type
Practice Challenged
Governing Body
Suit Filed Subsequent to Shelby County
Practice Enacted Subsequent to Shelby County
Success
Intent
Violation
Considered Gingles Factors
G1c - large and compact
G1f
G2c - cohesive
G2f
G3c - maj block voting
G3f
Gall
Considered Senate Factors
1c - history
1f
2c - polarized
2f
3c - disc practices
3f
4c - slating
4f
5c - effects
5f
6c - racial appeals
6f
7c - minority officials
7f
8c - responsiveness
8f
9c - policy justification
9f
African American
Latino
Native American
Asian
Multi
White	
Other
'''



keys = [
'caseTitle',
'citation',
'otherCitations',
'court',
'circuit',
'year',
'state',
'covered',
'caseType',
'practice',
'governingBody',
'filedAfterShelby',
'enactedAfterShelby',
'success',
'intent',
'violation',
'consideredGinglesFactors',
'G1c',
'G1f',
'G2c',
'G2f',
'G3c',
'G3f',
'Gall',
'consideredSenateFactors',
'1c',
'1f',
'2c',
'2f',
'3c',
'3f',
'4c',
'4f',
'5c',
'5f',
'6c',
'6f',
'7c',
'7f',
'8c',
'8f',
'9c',
'9f',
'africanAmerica',
'latino',
'nativeAmerican',
'asian',
'multi',
'white',
'other',
]

def readData(datafile):
    #open the csv file and convert it to dict using above keys
    csvFile = open(dataFile)
    caseInfo = [line for line in csv.DictReader(csvFile,fieldnames=keys)]
    #strip headers
    if caseInfo[0]['caseTitle'] == 'Litigation Title':
        caseInfo = caseInfo[1:]
    return caseInfo

def sortCaseList(caseInfo):
    #sort the case list here, because it's a pain to do in javascript
    return sorted(caseInfo, key=lambda x: (x['state'],x['year']))

def aggregateData(caseList):
    #different aggregations of the data to include in the javascript
    
    #number of cases by state
    states = {}
    for case in caseList:
        state = case['state']
        if state in states:
            states[state]['numCases'] += 1
            states[state]['cases'].append(case)
        else:
            states[state] = {
                            'name': state,
                            'numCases':1,
                            'cases': [case]}

    return {'allData': caseList,
            'aggregateForMap': states}


def csvToJSON(datafile, jsonFile):
    caseList = readData(datafile)
    caseList = sortCaseList(caseList)
    outData = aggregateData(caseList)

    openJSONFile = open(jsonFile,'w')
    json.dump(outData, openJSONFile)
    return outData
    

if __name__ == '__main__':
    dataFile = 'data.csv'
    jsonFile = 'vriData.json'
    dataDict = csvToJSON(dataFile, jsonFile)
