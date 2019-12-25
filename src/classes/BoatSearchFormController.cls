public with sharing class BoatSearchFormController {
    @AuraEnabled(cacheable=true)
    public static List<BoatType__c> getBoatTypes(){
        return [Select Id, Name From BoatType__c];        
    }
}